import React, { useEffect, useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import requestApi from '../../../helpers/api';
import * as actions from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import avatarimg from '../../../pic/avatar.png';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({});
  const [selectedFile, setSelectedFile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(actions.controlLoading(true));
    requestApi('/users/profile', 'GET')
      .then((res) => {
        console.log('res => ', res);
        setProfileData({ ...res.data, avatar: process.env.REACT_APP_API_URL + '/' + res.data.avatar });
        dispatch(actions.controlLoading(false));
      })
      .catch((err) => {
        console.log('err => ', err);
        dispatch(actions.controlLoading(false));
      });
  }, [dispatch]);

  const handleChange = (info) => {
    if (info.fileList.length > 0) {
      const file = info.fileList[info.fileList.length - 1].originFileObj;
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfileData({
          ...profileData,
          avatar: reader.result,
          file: file,
        });
        setSelectedFile(true);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(false);
    }
  };

  const handleUpload = () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('avatar', profileData.file);
    requestApi('/users/upload-avatar', 'POST', formData, 'json', 'multipart/form-data')
      .then((res) => {
        console.log('res => ', res);
        message.success('Avatar tải lên thành công');
        setLoading(false);
      })
      .catch((err) => {
        console.log('err => ', err);
        setLoading(false);
      });
  };

  return (
    <div className="profile-bg">
      <div className="pf-text">
        <h2>Avatar</h2>
      </div>
      <div className="profile-up">
        <img src={profileData.avatar || avatarimg} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
      </div>
      <div className="profile-btn">
        <Upload name="image" onChange={handleChange} accept="image/*" showUploadList={false}>
          <Button icon={<UploadOutlined />} loading={loading}>
            Chọn tệp
          </Button>
        </Upload>
        {selectedFile && (
          <Button onClick={handleUpload} loading={loading} disabled={loading}>
            Tải lên
          </Button>
        )}
      </div>
    </div>
  );
};

export default Profile;
