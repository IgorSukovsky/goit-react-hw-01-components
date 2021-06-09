import styles from "./Statistics.module.css";

const color = (item) => {
  const colorArray = ["#E74C3C", "#8E44AD", "#3498DB", "#27AE60", "#F39C12"];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, "")) % 5]}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 class={styles.title}>{title}</h2>
      <ul class={styles.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            class={styles.item}
            style={{ backgroundColor: color(item) }}
          >
            <span class={styles.label}>{item.label}</span>
            <span class={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
