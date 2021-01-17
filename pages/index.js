import EmployeeList from '../components/EmployeeList/EmployeeList';
import Layout from '../components/Layout/Layout';

export default function Home({employees}) {
  return (
    <Layout>
      <EmployeeList data={employees}></EmployeeList>
    </Layout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`${process.env.BASE_URL}/api/team`);
  if (res.status !== 200) {
    return {
      props: {
        employees: []
      }
    }
  }
  const employees = await res.json();
  return {
    props: {
      employees
    }
  }
}
