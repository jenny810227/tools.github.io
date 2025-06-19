class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <nav class="container-xxl navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">首頁</a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  股票
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="DividendYieldCalculator.html">殖利率計算機</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  小工具
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">終極密碼</a></li>
                  <li><a class="dropdown-item" href="#">Bulls and Cows</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  小遊戲
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">終極密碼</a></li>
                  <li><a class="dropdown-item" href="#">Bulls and Cows</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("my-header", MyHeader);
