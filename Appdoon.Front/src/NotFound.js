import {NavLink} from 'react-router-dom';

function NotFound() {
  return (
    <div class="container-main">
        <div class="col-12">
            <div id="content">
                <div class="d-404">
                    <div class="d-404-title">
                        <h1>صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
                    </div>
                    <div class="d-404-actions">
                        <NavLink to="/"><a href='#!' class="d-404-action-primary">صفحه اصلی</a></NavLink>
                    </div>
                    <div class="d-404-image">
                        <img src="assets/images/404.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NotFound;