function showContent(event, contentId) {
    // Declare all variables
    var i, tabContent, tabLinks, parentId;

    parentId = event.currentTarget.parentElement.id;

    // Get all elements with name parent_id + "-content" and hide them
    tabContent = document.getElementsByName(parentId + "-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByName(parentId + "-tab");
    for (i = 0; i < tabLinks.length; i++) {
       if(tabLinks[i].parentElement.id = parentId) {
           tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
    }              
               
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentId).style.display = "block";
    event.currentTarget.className += " active";
}       