import { BiCloudUpload } from 'react-icons/bi';
import styles from './Admin.module.css';

function Admin() {
  return (
    <div className={styles.Admin}>
      <div className={styles.wrapper}>
        <header>Upload File</header>
        <form>
          <div className={styles.container}>
            <input
              className={styles.fileInput}
              type="file"
              name="file"
              hidden
            />
            <BiCloudUpload />
            <div>Click to Upload Excel</div>
          </div>
          <button>Upload</button>
        </form>
        <section className={styles.progressArea}></section>
        <section className={styles.uploadedArea}></section>
      </div>
    </div>
  );
}

export default Admin;
