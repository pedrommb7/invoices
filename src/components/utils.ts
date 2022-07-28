export const formatDate = (date: string) => {
    const today = new Date(date);
    const month = today.getMonth();
    const m = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      "Due " + today.getDate() + " " + m[month] + " " + today.getFullYear()
    );
  };