import styles from "./Dialog.module.scss";

const Dialog = ({ isDialogOpen, label }) => {
  return (
    <section className={`${styles.Dialog} ${isDialogOpen && styles.Dialog__isOpen}`}>
      <p className={styles.Dialog__text}>{label}</p>
    </section>
  );
};

export default Dialog;
