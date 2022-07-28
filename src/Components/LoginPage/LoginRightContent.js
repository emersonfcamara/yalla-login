import { Link } from "react-router-dom";

const LoginRightContent = () => {
  return (
    <div id="right_content">
      <div id="title">
        <div id="bem_vindo_de_volta_">Bem-vindo de volta!</div>
        <div id="fa_a_seu_login_abaixo">Faça seu login abaixo</div>
        <div id="esqueceu_a_senha_">Esqueceu a senha?</div>
        <a
          id="_ainda_n_o_possui_uma_conta__registre_se_aqui__link"
          href="sign_up.html"
        >
          <div id="_ainda_n_o_possui_uma_conta__registre_se_aqui_">
            <span>Ainda não possui uma conta?</span>
            <span className="register-span">
              <Link to={'/register'} className="yalla-link">
                <b>Registre-se</b>
              </Link>
            </span>
            <span>aqui!</span>
          </div>
        </a>
      </div>

      <div className="bordergreen">
        <span>
          <a href="https://styallasystem.z20.web.core.windows.net" className="yalla-link">
            <b>Login</b>
          </a>
        </span>
      </div>

      <div id="password" className="borderround">
        <div id="placeholder_ek1">
          <div id="senha">
            <input
              type="Password"
              className="txtImput"
              title="Senha"
              placeholder="123456789"
            />
          </div>

          <div id="bx_bxs_lock_alt">
            <img src="skins/vector.png" id="vector" alt="" />
          </div>
        </div>
      </div>

      <div id="email" className="borderround">
        <div id="placeholder_ek2">
          <div id="email_ou_usu_rio">
            <input
              type="Email"
              className="txtImput"
              title="Email"
              placeholder="Email ou usuário"
            />
          </div>
        </div>
        <img src="skins/image_1.png" id="image_1" alt="" />
      </div>
    </div>
  );
};

export default LoginRightContent;
