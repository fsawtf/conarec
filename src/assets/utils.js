export const template = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "fsa.wtf@gmail.com",
    Password: "insano@01",
    To: "flavio.ssiv@gmail.com",
    From: "fsa.wtf@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(message => console.log(message));
};
