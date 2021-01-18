import EmployeeList from '../components/EmployeeList/EmployeeList';
import Layout from '../components/Layout/Layout';

export default function Home({employees}) {
  return (
    <Layout>
      <EmployeeList data={employees}></EmployeeList>
    </Layout>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch(`${process.env.BASE_URL}/api/team`);
  const employees = await res.json();
  return {
    props: {
      employees
    }
  }
}
