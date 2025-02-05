"use client";

import { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Modal,
} from "@mui/material";

import { handleNameChange, handleEmailChange, handleWhatsappChange, validateFields } from "../functions/formHandlers";

import * as S from "./styles";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState({ nome: "", email: "", whatsapp: "" });

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    const trimmedNome = nome.trimEnd();
    setNome(trimmedNome);

    if (validateFields(nome, email, whatsapp, setErrors)) {
      handleSubscribe();
    }
  };

  const handleSubscribe = async () => {
    try {

        const headers = { 'apiKey': process.env.REACT_APP_API_KEY };

        const payload = {
          nome: nome, 
          email: email,
          whatsapp: whatsapp
        };

        console.log(payload)

        setShowModal(true);

        // const response = await api.post(`/subscribe`, payload, { headers });

        // if (response.data) {
        //   setShowModal(true);

        //   console.log("sucesso")
        // }

    } catch (error) {
      console.log("error")
    }
};

  const handleClose = () => setShowModal(false);

  return (
    <S.Container>
      <Box
        component="video"
        src="/video/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <S.Header>
        <img src="/logo-fds-docs.svg" alt="Logo FDS Docs" />
      </S.Header>

      <S.Wrapper>
        <S.ContainerForm>
          <S.Description>
            <span>Conheça a solução completa para sua empresa:</span>

            <h1>Sistema de Emissão e Gerenciamento de Documentos de Segurança</h1>

            <p>
              Simplifique a criação de Fichas de Dados de Segurança (FDS), Fichas de Emergência e Rótulos GHS com um sistema
              que une todas as legislações em um único lugar.
            </p>
          </S.Description>

          <S.Form>
            <h2>Seja bem-vindo(a)!</h2>

            <S.FormDescription>
              <p>
                Quer saber como podemos facilitar a elaboração dos documentos de segurança na sua empresa?
              </p>

              <p>Inscreva-se e fique por dentro!</p>
            </S.FormDescription>

            <TextField
              id="nome"
              label="Nome Completo"
              variant="outlined"
              value={nome}
              onChange={(e) => handleNameChange(e, setNome, setErrors)}
              error={!!errors.nome}
              helperText={errors.nome}
            />

            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => handleEmailChange(e, setEmail, setErrors)}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              id="whatsapp"
              label="WhatsApp (Opcional)"
              variant="outlined"
              value={whatsapp}
              onChange={(e) => handleWhatsappChange(e, setWhatsapp, setErrors)}
              error={!!errors.whatsapp}
              helperText={errors.whatsapp}
            />

            <Button variant="contained" onClick={handleButtonClick}>
              Inscrever-se
            </Button>
          </S.Form>
        </S.ContainerForm>

        <Modal
          open={showModal}
          onClose={handleClose}
        >
          <S.ContainerModal>
            <img src="/undraw-modal.svg"/>
            <h2>
              Inscrição realizada com sucesso!
            </h2>

            <p>
              Obrigado pelo seu interesse! Entraremos em contato em breve com mais detalhes sobre o sistema.
            </p>
            
            <Button
              variant="contained"
              onClick={handleClose}>
              Fechar
            </Button>
          </S.ContainerModal>
        </Modal>
      </S.Wrapper>
    </S.Container>
  );
}