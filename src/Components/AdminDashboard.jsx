import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div className='text-center'>
    
     
        <button style={{border: "solid blue", borderRadius: "5px", fontWeight: "bold", padding: "4px 4px", backgroundColor: "lightgreen"}}><Link to="/manageProducts">Manage Products</Link></button> <br /> <br />
        <button className='mb-6' style={{border: "solid blue", borderRadius: "5px", fontWeight: "bold", padding: "4px 4px", backgroundColor: "lightblue"}}><Link to="/manageUsers">Manage Users</Link></button>
    
    
  </div>
);

export default AdminDashboard;
