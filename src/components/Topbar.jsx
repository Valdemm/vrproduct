function Topbar() {
  return (
    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope-fill"></i>
          <a href="V&R TECH@yandex.ru">V&R TECH@yandex.ru</a>
          <i class="bi bi-phone-fill phone-icon"></i> + 7 499 494 4949
        </div>
        <div class="social-links d-none d-md-block">
          <a href="" class="facebook">
            <i class="bi bi-facebook"></i>
          </a>

          <a href="" class="instagram">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
