let audio = new Audio("./audio/aud1.mp3");
$("#shorten").on("click", function () {
  let val = $(".form-control").val();
  $("#shorten").toggleClass("d-none");
  $("#btn-loading").toggleClass("d-none");
  $("#tempatCard").html(``);
  $.ajax({
    type: "GET",
    url: `https://api.shrtco.de/v2/shorten?url=${val}`,
    success: (res) => {
      audio.play();
      $("#shorten").toggleClass("d-none");
      $("#btn-loading").toggleClass("d-none");
      const args = res.result;
      let isi = /*html*/ `
      <div class="card" style="width: 18rem">
        <div class="card-header">Shortened URL</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${args.short_link}</li>
          <li class="list-group-item">${args.short_link2}</li>
          <li class="list-group-item">${args.short_link3}</li>
        </ul>
      </div>
      `;
      $("#tempatCard").html(isi);
    },
  });
});
