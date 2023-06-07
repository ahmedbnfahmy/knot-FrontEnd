// import React, {Suspense,useEffect} from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Home from '../pages/Home/Home';
// import TopNav from '../components/TopNav/TopNav';



// const Routes = () => {
//     const token = localStorage.getItem('token');
//     const dispatch = useDispatch()

//     return (
//         <>
        
//         <Suspense fallback="....Loading">
//         <Switch>
//             <Route path='/login' exact component={Login}/>            
//             <Route render={(props) => (
//                 <div>
// <Sidebar {...props}/>
// <TopNav/>
// <div className="layout__content-main">
//                         <PrivateRoute path='/' exact component={Home}/>
//                         <PrivateRoute path='/Users' exact component={Customers}/>
//                         <PrivateRoute path='/AddUser' exact component={AddUser}/>
// </div>
//                 </div>
// )}/>

// </Switch>
// </Suspense>

// </>
// )
// }

// export default Routes