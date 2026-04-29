export function FormCreateSet() {
    const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      width: "350px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "20px",
      backgroundColor: "pink",
    },
    label: {
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#41082b"
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "4px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      height: "60px",
      marginTop: "4px",
      resize: "vertical",
      boxSizing: "border-box",
    },
    submit: {
      padding: "10px",
      backgroundColor: "palevioletred",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    submitHover: {
      backgroundColor: "#005bb5",
    },
  };

    return ( 
        <form style={styles.form}>
      <label style={styles.label}>
        Название набора:
        <input
          type="text"
          name="name"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Описание:
        <textarea
          name="discriprion"
          style={styles.textarea}
        />
      </label>
      <input
        type="submit"
        value="Создать сет"
        style={styles.submit}
      />
    </form>
  );
}