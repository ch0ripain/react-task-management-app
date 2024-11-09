function dateFormatter(date) {
    const [year, month, day] = date.split('-').map(Number);

    const d = new Date(year, month - 1, day);

    return d.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
}

export default dateFormatter;

