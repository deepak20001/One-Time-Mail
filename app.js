// generate random temp email
function create() {
    let email = document.getElementById('email');


    fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
        .then(emaildata => emaildata.json())
        .then(emailData => {
            const emal = emailData[0];
            console.log(emal);
            email.innerText = emal;
        })
    console.log("click ho gaya");
}

// find active domain names
function getDomain() {

    fetch('https://www.1secmail.com/api/v1/?action=getDomainList')
        .then(domaindata => domaindata.json())
        .then(activeemail => {
            activeemail.forEach((email) => {
                console.log(email);
            })
        })
    console.log("domain he");
}
// find mails on active domain
para = document.getElementById('message');

const getmails = async () => {
    para.style.display = "block";
    let email = document.getElementById('email').innerText;
    console.log(email);
    let index = email.indexOf("@");
    let login = email.substring(0, index);
    console.log(login);
    let domain = email.substring(index + 1, email.length);
    console.log(domain);
    const url = `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    parseData.map((elem) => {
        console.log(elem.id);
        let id = elem.id;
        print(id);
    })
    // message(parseData);
    // let id=parseData[0].id;
    // console.log(id);
    // fetch(url)
    // .then(data=>data.json())
    // .then(mails=>{

    //     console.log(mails);
    // })
    console.log("email aa gaya");
    // console.log(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`)

}
// get single message  for an id
// const message =async (parseData)=>{
//     let email=document.getElementById('email').innerText;
//     console.log(email);
//     let index=email.indexOf("@");
//     let login=email.substring(0,index);
//     console.log(login);
//     let domain=email.substring(index+1,email.length);
//     console.log(domain);
//     parseData.map((elem)=>{
//         console.log(elem.id);
//          let id=elem.id;
//          const messageurl=`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`;
//          let messagedata=await fetch(url);
//          let parsemessageData=await  messagedata.json();
//          console.log(parsemessageData);
//       })
// }

async function print(id) {
    console.log(id);
    let email = document.getElementById('email').innerText;
    console.log(email);
    let index = email.indexOf("@");
    let login = email.substring(0, index);
    console.log(login);
    let domain = email.substring(index + 1, email.length);
    console.log(domain);
    const messageurl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`;
    let messagedata = await fetch(messageurl);
    let parsemessageData = await messagedata.json();
    console.log(parsemessageData);
    console.log(parsemessageData.textBody);
    document.getElementById("message").innerHTML = parsemessageData.textBody;
}


// function handleCopyText() {
//     selectText = document.getElementById("email");

//     selectText.select('email');
//     navigator.clipboard.writeText(selectText.value);
//     props.showAlert("success", "Copied to Clipboard!");
//     console.log("Hello");
// };

// function myFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("email");

//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */

//     /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText.value);
//     console.log("Hello");
//     /* Alert the copied text */;
// }

