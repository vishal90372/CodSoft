const tablinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}