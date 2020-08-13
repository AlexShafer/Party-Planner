const accordionWrapper = $("#accordionWrapper");

async function getGuestList () {
  // ajax call for guestlist
  $.ajax(
    {
      method: "GET",
      url: "/api/guestlist",
      data: guests
    }
  );
  return guests;
}

async function fillGuestList () {
  const guestList = await getGuestList ();
  console.log(guestList);
}


$(accordionWrapper).HTML(fillGuestList());