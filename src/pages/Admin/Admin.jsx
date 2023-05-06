import axios from 'axios';
import { useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import styles from './Admin.module.css';

function Admin() {
  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    const url =
      import.meta.env.VITE_REACT_APP_BASE_API_URL + '/api/admin/csvData';

    axios
      .post(url, formData)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleUploadClick = () => {
    if (!fileInput.current) return;
    fileInput.current.click();
  };

  return (
    <div className={styles.Admin}>
      <div className={styles.wrapper}>
        <header>Upload File</header>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.container} onClick={handleUploadClick}>
            <input
              className={styles.fileInput}
              ref={fileInput}
              type="file"
              name="file"
              onChange={handleFileChange}
              hidden
            />
            <BiCloudUpload />
            <div>Click to Upload Excel</div>
            {file ? <p className={styles.fileName}>{file.name}</p> : null}
          </div>
          <button disabled={!file || isLoading}>Upload</button>
        </form>
        <section className={styles.progressArea}></section>
        <section className={styles.uploadedArea}></section>
      </div>
    </div>
  );
}

export default Admin;
