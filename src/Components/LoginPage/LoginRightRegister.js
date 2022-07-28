import { Link } from "react-router-dom";

const LoginRightRegister = () => {
  return (
    <div id="right_content_register">
      <div id="title_register">
        <div id="registre_se">Registre-se e seja um Yaller!</div>
        <div id="preencha_seus_dados">
          Por favor, preencha seus dados abaixo
        </div>
      </div>

      <div className="bordergray" id="btnregister">
        <span>
          <Link to={"/"} className="yalla-link">
            <b>Criar conta</b>
          </Link>
        </span>
      </div>
      <div id="divtextcriarconta">
        <span>
          Ao clicar em "Criar conta" você <b>concorda</b> com o nosso{" "}
          <b>regulamento</b> assim como os <b>termos e condições</b>
        </span>
      </div>

      <div id="divtextpossuiconta">
        <span>
          Já possui uma conta?{" "}
          <Link to="/" className="yalla-link">
            <b>Clique aqui</b>
          </Link>{" "}
          para entrar.
        </span>
      </div>

      <div id="divname">
        <div id="name_register" className="borderround-short">
          <div className="placeholder_ek1">
            <div id="name">
              <input
                type="TextBox"
                className="txtImput_Register"
                title="Nome"
                value="Nome"
              />
            </div>
          </div>
        </div>

        <div id="last_name_register" className="borderround-short">
          <div className="placeholder_ek1">
            <div id="last_name">
              <input
                type="TextBox"
                className="txtImput_Register"
                title="Sobrenome"
                value="Sobrenome"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="divemail">
        <div id="email_register" className="borderround-short">
          <div className="placeholder_ek2">
            <div id="email_ou_usu_rio_2">
              <input
                type="Email"
                className="txtImput_Register"
                title="Email"
                value="Email ou usuário"
              />
            </div>
          </div>
        </div>

        <div id="confirm_email_register" className="borderround-short">
          <div className="placeholder_ek2">
            <div id="email_ou_usu_rio_2">
              <input
                type="Email"
                className="txtImput_Register"
                title="Confirme Email"
                value="Confirme Email"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="password_register" className="borderround-large">
        <div className="placeholder_ek1">
          <div id="senha_register">
            <input
              type="Password"
              className="txtImput_Register"
              title="Senha"
              value="Confirme senha"
            />
          </div>
        </div>
        <div className="divbottomtext">
          <span>Mínimo de x caracteres, etc etc.</span>
        </div>
      </div>

      <div id="confirm_password_register" className="borderround-large">
        <div className="placeholder_ek1">
          <div id="confirm_password">
            <input
              type="Password"
              className="txtImput_Register"
              title="Confirme senha"
              value="Confirme senha"
            />
          </div>
        </div>
        <div className="divbottomtext">
          <span>As senhas não correspondem</span>
        </div>
      </div>
    </div>
  );
};

export default LoginRightRegister;
