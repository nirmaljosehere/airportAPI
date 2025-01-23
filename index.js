(async () => {
  // Extract the flightID from the query string
  const urlParams = new URLSearchParams(window.location.search);
  const flightID = urlParams.get('flightID');

  if (!flightID) {
    document.body.innerHTML = JSON.stringify({ error: "flightID parameter is required" });
    return;
  }

  try {
    const response = await fetch(
      `https://my.api.mockaroo.com/qatar_airways_api.json?key=1b870620&__method=POST&flightID=${flightID}`,
      { method: 'GET' }
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    document.body.innerHTML = JSON.stringify(data);
  } catch (error) {
    document.body.innerHTML = JSON.stringify({ error: error.message });
  }
})();
