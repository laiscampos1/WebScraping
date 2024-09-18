async function buscarImagensDosPersonagens(url) {
    
  
  //Site utilizado
   let urlAlvo = 'https://sanrio.com.br';
   let $ = cheerio.load(conteudoHtml);
  
      const container = $('.characters-container');
  
      if (!container.length) {
        throw new Error('Elemento container de personagens não encontrado.');
      }
  
      const urlsImagens = container.find('img')
        .map((_, elemento) => $(elemento).attr('src'))
        .get();
  
      return urlsImagens;
    } catch (error) {
      console.error('Erro ao buscar ou analisar imagens:', error.message);
      return []; 
    }
  
  
  buscarImagensDosPersonagens(urlAlvo)
    .then(urlsImagens => {
      console.log('URLs de imagens extraídas:', urlsImagens);
    })
    .catch(error => {
      console.error('Erro ao buscar imagens:', error.message);
    });