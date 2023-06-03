var tablinks = document.getElementsByClassName('.tab-link');
var tabcontents = document.getElementById("tab-contents");
tabcontents.innerHTML = "<ul><li><span>Mern Developer</span><br>Designing Web interfaces<br>React.js,Node.js</li><li><span>C & C++</span><br>Programming Language</li><li><span>Data Structure And Algorithm</span><br>In C&C++</li><li><span>Problem Solver</span><br>Leetcode,Codechef,GFG</li></ul>";
function opentab(e){
    if(e==1){
        tabcontents.innerHTML = "<ul><li><span>Mern Developer</span><br>Designing Web interfaces<br>React.js,Node.js</li><li><span>C & C++</span><br>Programming Language</li><li><span>Data Structure And Algorithm</span><br>In C&C++</li><li><span>Problem Solver</span><br>Leetcode,Codechef,GFG</li></ul>";
    }
    else if(e==2){
        tabcontents.innerHTML = "<ul><li><span>Problem solving</span><br>More than 100 ques on Leetcode<br>Codechef,Gfg also</li><li><span>Internship</span><br>Oasis Imfobyte<br>Bharat Intern</li></ul>";

    }else{
        tabcontents.innerHTML = "<ul><li><span>B.tech</span><br>Ajay Kumar Garg Engineering College Ghaziabad <br>Uttarpradesh</li><li><span>Intermidiate</span><br>Sri Sai Inter College Barabanki<br>%87 in math 99<br>District rank 7</li><li><span>Highschool</span><br>Anand Vihar Convent Inter College Barabanki<br>%86</li></ul>";
    }    

}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
 function closemenu(){
     sidemenu.style.right="-200px";
 }