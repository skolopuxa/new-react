export function FormCreateCard() {
    const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    label: {
      marginBottom: "10px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "4px",
      boxSizing: "border-box",
    },
    submit: {
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    submitHover: {
      backgroundColor: "#45a049",
    },
  };
   return (
    <form style={styles.form}>
      <label style={styles.label}>
        передняя сторона карточки:
        <input type="text" name="fronttext" style={styles.input} />
      </label>
      <label style={styles.label}>
        Задняя сторона карточки:
        <input type="text" name="backtext" style={styles.input} />
      </label>
      <input type="submit" value="Создать карточку" style={styles.submit} />
    </form>
  );
}