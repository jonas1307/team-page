import styles from './Employee.module.css';

const Employee = ({data}) => {
  return (
    <div className={styles.employee_container}>
      <img src={data.picture} alt={`${data.name} picture`} />
      <div className={styles.employee_role}>{data.role}</div>
      <div className={styles.employee_name}>{data.name}</div>
    </div>
  )
}

export default Employee;