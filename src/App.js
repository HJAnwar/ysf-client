import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import OurTeam from './Component/AboutUs/OurTeam/OurTeam';
import WhoWeAre from './Component/AboutUs/WhoWeAre/WhoWeAre';
import Donate from './Component/Donate/Donate';
import Education from './Component/OurWork/Education/Education';
import SocialDevelopment from './Component/OurWork/SocialDevelopment/SocialDevelopment';
import Contact from './Component/Contact/Contact';
import OurProject from './Component/OurProject/OurProject/OurProject';
import LoginForm from './Component/LoginArea/LoginFrom/LoginForm';
import Admin from './Component/AdminArea/Admin/Admin';
import SideNavbar from './Component/AdminArea/SideNavbar/SideNavbar';
import AllTeamMember from './Component/AdminArea/AllTeamMembers/AllTeamMember/AllTeamMember';
import AllProject from './Component/AdminArea/AllProjects/AllProject/AllProject';
import AllAdmin from './Component/AdminArea/AllAdmins/AllAdmin/AllAdmin';
import AllEducation from './Component/AdminArea/AllEducations/AllEducation/AllEducation';
import AllSocialDevelopment from './Component/AdminArea/AllSocialDevelopments/AllSocialDevelopment/AllSocialDevelopment';
import AllWhoWeAre from './Component/AdminArea/AllWhoWeAres/AllWhoWeAre/AllWhoWeAre';
import AllContact from './Component/AdminArea/AllContacts/AllContact/AllContact';
import AllDonate from './Component/AdminArea/AllDonates/AllDonate/AllDonate';
import MembersCollection from './Component/MembersCollection/MembersCollection/MembersCollection';
import ActiveMembers from './Component/MembersCollection/ActiveMembers/ActiveMembers';
import Membets from './Component/MembersCollection/Membets/Membets';
import { createContext, useState } from 'react';
import AllActiveMember from './Component/AdminArea/AllActiveMember/AllActiveMember/AllActiveMember';
import PoorHelp from './Component/OurWork/PoorHelp/PoorHelp';
import AllPoorHelp from './Component/AdminArea/AllPoorHelp/AllPoorHelp/AllPoorHelp';

export const MyContext = createContext()


function App() {
  const [loginUser, setLoginUser] = useState({})
  return (

    <MyContext.Provider value = {[loginUser, setLoginUser]}>
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/whoweare">
          <WhoWeAre />
        </Route>
        <Route path="/ourTeam">
          <OurTeam />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/ourProject">
          <OurProject />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/members">
          <MembersCollection />
        </Route>
        <Route path="/activeMember">
          <ActiveMembers />
        </Route>
        <Route path="/justMember">
          <Membets />
        </Route>
        {/* Admin route start here */}
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/allEducation">
          <SideNavbar>
            <AllEducation />
          </SideNavbar>
        </Route>
        <Route path="/allSocialDevelopment">
          <SideNavbar>
            <AllSocialDevelopment />
          </SideNavbar>
        </Route>
        <Route path="/allProject">
          <SideNavbar>
            <AllProject />
          </SideNavbar>
        </Route>
        <Route path="/allPoorHelps">
          <SideNavbar>
            <AllPoorHelp />
          </SideNavbar>
        </Route>
        <Route path="/allWhoWeAre">
          <SideNavbar>
            <AllWhoWeAre />
          </SideNavbar>
        </Route>
        <Route path="/allTeam">
          <SideNavbar>
            <AllTeamMember />
          </SideNavbar>
        </Route>
        <Route path="/allContact">
          <SideNavbar>
            <AllContact />
          </SideNavbar>
        </Route>
        <Route path="/allDonate">
          <SideNavbar>
            <AllDonate />
          </SideNavbar>
        </Route>
        <Route path="/allAdmin">
          <SideNavbar>
            <AllAdmin/>
          </SideNavbar>
        </Route>
        <Route path="/allActiveMember">
          <SideNavbar>
            <AllActiveMember/>
          </SideNavbar>
        </Route>
        {/* Admin route ends here */}
        <Route path="/socialDevelopment">
          <SocialDevelopment />
        </Route>
        <Route path="/helps">
          <PoorHelp />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/navbars">
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
