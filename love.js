document.getElementById("loveForm").addEventListener("submit", calculateLovePercentage);

function calculateLovePercentage(Event) {
  Event.preventDefault(); // Prevent the default form submission

  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  document.getElementById("name1").value = ""; // Clear previous result
  document.getElementById("name2").value = ""; // Clear previous result

  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
    return;
  } else {
    const lovePercentage = Math.floor(Math.random() * 101); 
    const result = document.getElementById("result");
    result.innerText = `${name1} and ${name2} love Percentage: ${lovePercentage}%!`;

    if (lovePercentage >= 80) {
        result.innerHTML += "<br>Wow! You are a great match!💖";
    } else if (lovePercentage >= 50 && lovePercentage < 80) {
        result.innerHTML += "<br>Not bad! You have potential!💘";
    } else {
        result.innerHTML += "<br>Hmm, maybe friendship is better!💔";
    }   
  } };
