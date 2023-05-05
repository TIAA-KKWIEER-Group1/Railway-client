import styles from './Admin.module.css';
function Admin() {
  return <div className={styles.wrapper}>
    <header>Upload EXCEL OR CSV only</header>
    <form action="#">
      <input className={styles.file - input} type="file" name="file" hidden />
      <i className={styles.fas fa-cloud-upload-alt ></i>
    <p>Browse File to Upload</p>
    <button id="upload_btn">Click to Upload Excel</button>
  </form><section className={styles.progress-area}></section><section className={styles.uploaded - area}></section>
 
</div>;
}

export default Admin;
