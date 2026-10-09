$(function () {
  $(".navbar-burger").on("click", function () {
    const $burger = $(this);
    const menuId = $burger.attr("data-target");
    const $menu = $("#" + menuId);
    const isActive = !$burger.hasClass("is-active");

    $burger.toggleClass("is-active", isActive);
    $menu.toggleClass("is-active", isActive);
    $burger.attr("aria-expanded", String(isActive));
  });
});
