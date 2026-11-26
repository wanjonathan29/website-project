fetch("/api/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Sam", text: "Hello!" })
}).then(r => r.json()).then(console.log);
