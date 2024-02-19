import Dashboard from "../pages/UserPages/Dashboard.js";
import DashboardLawyer from "../pages/LawyerPages/DashboardLawyer";
import Logout from "../services/Logout";
import Pastcases from "../pages/SharedPages/Pastcases.js";
import Efiling from "../pages/SharedPages/Efiling.js";
import FindLawyer from "../pages/UserPages/FindLawyer.js";
import LegalGuide from "../pages/SharedPages/LegalGuide.js";
import PrepAndPitch from "../pages/UserPages/PrepAndPitch.js";
import Peerconnect from "../pages/SharedPages/Peerconnect.js";
import TrialDetainees from "../pages/UserPages/TrialDetainees.js";
import QuickFixCourt from "../pages/SharedPages/QuickFixCourt.js";
import ChatPage from "../pages/SharedPages/ChatPage.js";
import Home from "../pages/Account/Home.js";
import Login from "../pages/Account/Login.js";
import Register from "../pages/Account/Register.js";
import NotFound from "../pages/Error/NotFound.js";
import ChatBot from "../pages/SharedPages/ChatBot.js";
import ForgotPw from "../pages/SharedPages/ProfileDashboard/ForgotPw.js";
import ProfileDashboard from "../pages/SharedPages/ProfileDashboard/ProfileDashboard.js";
import EditDetails from "../pages/SharedPages/ProfileDashboard/EditDetails.js";
import ChangePassword from "../pages/SharedPages/ProfileDashboard/ChangePassword.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faGavel,
	faChartPie,
	faHandHoldingHand,
	faPeopleGroup,
	faRightToBracket,
	faUserPlus,
	faComments,
	faIdCard,
	faRightFromBracket,
	faLandmarkDome,
	faBook,
	faClockRotateLeft,
	faScaleBalanced,
	faArrowRightFromBracket,
	faUserGroup,
	faUser,
	faUnlockKeyhole,
	faFilePen,
	faMessage,
} from "@fortawesome/free-solid-svg-icons";
import RequestsPage from "../pages/LawyerPages/RequestsPage";
import VideoConference from "../pages/VideoConferencing.js";
import ArticlesRender from "../pages/SharedPages/ArticlesRender.js";

const routes = [
	{
		path: "/me",
		component: <ProfileDashboard />,
		name: "Profile",
		isPrivate: true,
		isUtility: false,
		isMenuLawyer: false,
		isMenuProfile: true,
		isMenuUser: false,
		icon: <FontAwesomeIcon icon={faUser} />,
	},
	{
		path: "/Video_Room",
		component: <VideoConference />,
		name: "Video Call",
		isPrivate: true,
		isUtility: false,
		isMenuLawyer: false,
		isMenuProfile: false,
		isMenuUser: false,
	},
	{
		path: "/dashboard",
		component: <Dashboard />,
		name: "Dashboard",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: false,
		isUtility: false,
		isMenuProfile: true,
		icon: <FontAwesomeIcon icon={faChartPie} />,
	},
	{
		path: "/dashboardLawyer",
		component: <DashboardLawyer />,
		name: "Dashboard",
		isPrivate: true,
		isMenuUser: false,
		isMenuLawyer: true,
		isUtility: false,
		isMenuProfile: false,
		icon: <FontAwesomeIcon icon={faChartPie} />,
	},
	{
		path: "/guide",
		component: <LegalGuide />,
		name: "Legal Guide",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faHandHoldingHand} />,
	},
	{
		path: "/Quick-fix-court",
		component: <QuickFixCourt />,
		name: "Quick Fix Court",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faLandmarkDome} />,
	},
	{
		path: "/find-lawyer",
		component: <FindLawyer />,
		name: "Find Lawyer",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faGavel} />,
	},
	{
		path: "/requests",
		component: <RequestsPage />,
		name: "Requests",
		isPrivate: true,
		isMenuUser: false,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faUserGroup} />,
	},
	{
		path: "/prep-and-pitch",
		component: <PrepAndPitch />,
		name: "Prep & Pitch",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faBook} />,
	},

	{
		path: "/efilling",
		component: <Efiling />,
		name: "E-Filing",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faIdCard} />,
	},
	{
		path: "/peer-connect",
		component: <Peerconnect />,
		name: "Peer Connect",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faPeopleGroup} />,
	},
	{
		path: "/trial-detainees",
		component: <TrialDetainees />,
		name: "Trial Detainees",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faScaleBalanced} />,
	},
	{
		path: "/pastcases",
		component: <Pastcases />,
		name: "Past Cases",
		isPrivate: true,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
	},

	{
		path: "/home",
		component: <Home />,
		name: "Home",
		isPrivate: false,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faHome} />,
	},

	{
		path: "/login",
		component: <Login />,
		name: "Login",
		isPrivate: false,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faRightToBracket} />,
	},
	{
		path: "/logout",
		component: <Logout />,
		name: "Logout",
		isPrivate: true,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
	},
	{
		path: "/sign-up",
		component: <Register />,
		name: "Sign Up",
		isPrivate: false,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faUserPlus} />,
	},
	{
		path: "/chat-bot",
		component: <ChatBot />,
		name: "Chat Bot",
		isPrivate: true,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: false,
		icon: <FontAwesomeIcon icon={faGavel} />,
	},
	{
		path: "/forgotPassword",
		component: <ForgotPw />,
		name: "Forgot Password",
		isPrivate: false,
		isMenuUser: true,
		isMenuLawyer: true,
		isUtility: true,
		icon: <FontAwesomeIcon icon={faGavel} />,
	},
	{
		path: "*",
		component: <NotFound />,
		name: "Not Found",
		isPrivate: false,
		isMenuUser: false,
		isMenuLawyer: false,
		isUtility: true,
		icon: <FontAwesomeIcon icon={faGavel} />,
	},
	{
		path: "/chat",
		component: <ChatPage />,
		name: "Messages",
		isPrivate: true,
		isMenuLawyer: true,
		isMenuUser: true,
		icon: <FontAwesomeIcon icon={faMessage} />,
	},
	// {
	// 	path: "/me",
	// 	component: <ProfileDashboard />,
	// 	name: "Profile",
	// 	isPrivate: true,
	// 	isUtility: false,
	// 	isMenuLawyer: false,
	// 	isMenuProfile: true,
	// 	isMenuUser: false,
	// 	icon: <FontAwesomeIcon icon={faUser} />,

	// },
	{
		path: "/logout",
		component: <Logout />,
		name: "Logout",
		isPrivate: true,
		isMenuLawyer: false,
		isMenuUser: false,
	},
	{
		path: "/edit_details",
		component: <EditDetails />,
		name: "Edit Details",
		isPrivate: true,
		isUtility: false,
		isMenuLawyer: false,
		isMenuProfile: true,
		isMenuUser: false,
		icon: <FontAwesomeIcon icon={faFilePen} />,
	},
	{
		path: "/update_password",
		component: <ChangePassword />,
		name: "Change Password",
		isPrivate: true,
		isUtility: false,
		isMenuLawyer: false,
		isMenuProfile: true,
		isMenuUser: false,
		icon: <FontAwesomeIcon icon={faUnlockKeyhole} />,
	},
	{
		path: "/guide/article/:index",
		component: <ArticlesRender index ={localStorage.getItem("Index")}/>,
		name : 'Articles',
		isPrivate : true,
		isUtility: false,
		isMenuLawyer: false,
		isMenuProfile: false,
		isMenuUser: false,
	}
];

export default routes;
