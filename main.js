window.onload = function() {
	var nav = document.getElementsByClassName("SidebarTopNavLinks Sidebar-section Sidebar-firstSection");
    var gantt = document.createElement('a');
    gantt.innerHTML = '<a class="NavigationLink SidebarItemRow--leftAlign SidebarItemRow SidebarTopNavLinks" href="https://instagantt.com"><span class="SidebarItemRow-name" title="My Tasks">Instagantt</span></a>';
    nav.appendChild(gantt);
}
