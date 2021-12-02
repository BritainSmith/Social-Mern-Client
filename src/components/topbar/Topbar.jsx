/** @format */

import "./topbar.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">SomeSocial</span>
			</div>
			<div className="topbarCenter">
				<div className="searchBar">
					<SearchSharpIcon className="searchIcon" />
					<input
						placeholder="Search for friends, posts or videos!"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<PersonIcon />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<ChatIcon />
						<span className="topbarIconBadge">2</span>
					</div>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<NotificationsIcon />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img src="/assets/People/1.jpg" alt="" className="topbarImg" />
			</div>
		</div>
	);
};

export default Topbar;
