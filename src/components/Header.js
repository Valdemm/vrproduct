function Header() {
  return (
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="index.html">V&R TECH</a>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Главная
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                О компании
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#services">
                Новости
              </a>
            </li>
            <li>
              <a class="nav-link scrollto " href="#portfolio">
                Лицензии
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#pricing">
                Услуги
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#team">
                Наши клиенты
              </a>
            </li>

            <li>
              <a class="nav-link scrollto" href="#contact">
                Контакты
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
