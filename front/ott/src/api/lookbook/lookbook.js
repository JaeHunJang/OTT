import axiosInstance from '../axiosInstance';

export const lookbookCreate = (formData) => {
  axiosInstance
    .post('/api//lookbook/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(() => {
      console.log('룩북 저장 성공');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const lookbookUpdate = (formData, lookbookId) => {
  axiosInstance
    .put(`/api/lookbook/${lookbookId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(() => {
      console.log('룩북 수정 성공');
    })
    .catch((error) => {
      console.error(error);
    });
};

export const lookbookDelete = (lookbook) => {
  axiosInstance
    .delete(`/api/lookbook/${lookbook.id}`)
    .then(() => {
      console.log('룩북삭제성공');
    })
    .catch((error) => {
      console.error(error);
    });
};
