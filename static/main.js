function forward() {
    if (confirm("Bunu yapmak istiyor musun?")) {
      window.location.href = "https://ardacar.com";
    } else {
      alert("Süpersin!");
    }
}

for (let i = 0; i < 17; i++) {
    console.log("%cSakin Ol!", "color:#f1c40f; font-size: 40pt");
    let randomSpaces = " ".repeat(Math.floor(Math.random() * 10) + 1);
    console.log(randomSpaces); 
}


  // Initialize the agent on page load.
  const fpPromise = import('https://fpjscdn.net/v3/3EzWDNSpfwGMPGAyLxAo')
    .then(FingerprintJS => FingerprintJS.load({
      region: "eu"
    }))

  // Get the visitorId when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      const visitorId = result.visitorId
      console.log(visitorId)
    })
