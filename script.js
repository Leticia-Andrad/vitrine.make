function enviarWhatsApp() {
    const form = document.forms["formulario"];
    const pagamento = document.forms["pagamento"];

    // Função para coletar os valores das checkboxes
    function getCheckboxValues(name) {
      const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
      return Array.from(checkboxes).map(cb => cb.value).join(", ");
    }


    const dados = {
      nome: form.nome.value,
      telefone: form.telefone.value,
      email: form.email.value,
      cep: form.cep.value,
      endereco: form.endereco.value,
      bairro: form.bairro.value,
      cidade: form.cidade.value,
      estado: form.estado.value,
      cor_pele: perfil.cor_pele.value,
      sua_pele: perfil.sua_pele.value,
      tratar_pele: perfil.tratar_pele.value,
      aromas: perfil.aromas.value,
      tipo_cabelo: perfil.tipo_cabelo.value,
      cor_cabelo: perfil.cor_cabelo.value,
      espessura_cabelo: perfil.espessura_cabelo.value,
      seucabelo: perfil.seucabelo.value,
      necessidades: perfil.necessidades.value,
      batom: perfil.batom.value,
      sombra: perfil.sombra.value,
      lapis_delineador: perfil.lapis_delineador.value,
      itens_maquiagem: getCheckboxValues("itens_maquiagem"),
      cuidados_cabelo: getCheckboxValues("cuidados_cabelo"),
      skincare: getCheckboxValues("skincare"),
      pagamento: pagamento.pagamento_opcao.value
    };

    const mensagem =
      `*Novo Pedido Vitrine Make*%0A%0A` +
      `👤 *Nome:* ${dados.nome}%0A` +
      `📞 *Telefone:* ${dados.telefone}%0A` +
      `📧 *Email:* ${dados.email}%0A` +
      `🏠 *Endereço:* ${dados.endereco}, ${dados.bairro}, ${dados.cidade} - ${dados.estado} (${dados.cep})%0A%0A` +

      `💄 *Perfil de Beleza:*%0A` +
      `• Cor da pele: ${dados.cor_pele}%0A` +
      `• Tipo de pele: ${dados.sua_pele}%0A` +
      `• O que deseja tratar na pele: ${dados.tratar_pele}%0A` +
      `• Aromas favoritos: ${dados.aromas}%0A%0A` +

      `💇‍♀️ *Cabelo:*%0A` +
      `• Tipo: ${dados.tipo_cabelo}%0A` +
      `• Cor: ${dados.cor_cabelo}%0A` +
      `• Espessura: ${dados.espessura_cabelo}%0A` +
      `• Natural ou Tratado: ${dados.seucabelo}%0A` +
      `• Necessidades: ${dados.necessidades}%0A%0A` +

      `💋 *Maquiagem:*%0A` +
      `• Cores de Batom: ${dados.batom}%0A` +
      `• Cores de Sombra: ${dados.sombra}%0A` +
      `• Lápis/Delineador: ${dados.lapis_delineador}%0A` +


      `💄 *Itens de Maquiagem:*%0A` +
      `• ${dados.itens_maquiagem}%0A%0A` +

      `💇‍♀️ *Cuidados com o Cabelo:*%0A` +
      `• ${dados.cuidados_cabelo}%0A%0A` +

      `🧖‍♀️ *Skincare:*%0A` +
      `• ${dados.skincare}%0A%0A` +

      `💳 *Forma de Pagamento:* ${dados.pagamento} - Plano R$50/mês (Trimestral)%0A`;

    // Número do WhatsApp da loja (coloque com DDI, ex: 5511999999999)
    const numeroWhatsApp = "5514991106681";
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(url, "_blank");
  }

  