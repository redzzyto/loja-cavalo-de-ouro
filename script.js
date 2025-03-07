
<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cowboy Roots - Moda Country Autêntica</title>
	<style>
		/* Estilos Básicos */
		body {
			font-family: 'Arial', sans-serif;
			margin: 0;
			padding: 0;
			background-color: #f5f5dc;
			color: #4a3a3a;
		}

		.container {
			width: 80%;
			margin: 0 auto;
		}

		header {
			background-color: #8B4513;
			padding: 20px 0;
			text-align: center;
		}

		nav {
			background-color: #D2B48C;
			padding: 10px;
			text-align: center;
		}

		nav a {
			color: #4a3a3a;
			margin: 0 15px;
			text-decoration: none;
			font-weight: bold;
		}

		.hero {
			background-image: url('https://via.placeholder.com/1200x400?text=Fazenda+Country');
			background-size: cover;
			height: 400px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		}

		.products {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 20px 0;
		}

		.product {
			background-color: white;
			border: 1px solid #ddd;
			border-radius: 8px;
			width: 32%;
			margin-bottom: 20px;
			padding: 15px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		}

		footer {
			background-color: #8B4513;
			color: white;
			text-align: center;
			padding: 20px;
			margin-top: 40px;
		}

		/* Cores e fontes do tema country */
		h1,
		h2 {
			color: #8B4513;
			font-family: 'Georgia', serif;
		}

		a:hover {
			color: #A0522D;
		}
	</style>
</head>

<body>
	<header>
		<div class="container">
			<h1>Cowboy Roots</h1>
			<p>Moda Country com Raízes Autênticas</p>
		</div>
	</header>

	<nav>
		<div class="container">
			<a href="#home">Início</a>
			<a href="#produtos">Produtos</a>
			<a href="#sobre">Sobre Nós</a>
			<a href="#contato">Contato</a>
		</div>
	</nav>

	<section class="hero">
		<div class="container">
			<h2>Vista-se com a Alma do Campo</h2>
			<a href="#produtos"
				style="background-color: #D2B48C; padding: 10px 20px; border-radius: 5px; color: white; text-decoration: none;">Ver
				Coleções</a>
		</div>
	</section>

	<div class="container">
		<!-- Seção de Produtos -->
		<section id="produtos">
			<h2>Nossos Produtos</h2>
			<div class="products">
				<div class="product">
					<img src="https://via.placeholder.com/300x200?text=Camisa+Xadrez" alt="Camisa Xadrez">
					<h3>Camisa Xadrez Clássica</h3>
					<p>R$ 129,90</p>
					<button style="background-color: #8B4513; color: white; border: none; padding: 8px 16px; border-radius: 5px;">Comprar</button>
				</div>
				<div class="product">
					<img src="https://via.placeholder.com/300x200?text=Botas+Country" alt="Botas Country">
					<h3>Botas de Cowboy</h3>
					<p>R$ 349,90</p>
					<button style="background-color: #8B4513; color: white; border: none; padding: 8px 16px; border-radius: 5px;">Comprar</button>
				</div>
				<div class="product">
					<img src="https://via.placeholder.com/300x200?text=Chapéu+Country" alt="Chapéu Country">
					<h3>Chapéu de Cowboy</h3>
					<p>R$ 89,90</p>
					<button style="background-color: #8B4513; color: white; border: none; padding: 8px 16px; border-radius: 5px;">Comprar</button>
				</div>
			</div>
		</section>

		<!-- Sobre Nós -->
		<section id="sobre">
			<h2>Sobre Nós</h2>
			<p>Fundada em 2020, a Cowboy Roots nasceu do amor pela vida no campo e pelo estilo country autêntico.
				Trabalhamos com artesãos locais para criar peças únicas e duráveis.</p>
		</section>

		<!-- Contato -->
		<section id="contato">
			<h2>Contato</h2>
			<p>WhatsApp: (11) 98765-4321</p>
			<p>Email: contato@cowboyroots.com.br</p>
		</section>
	</div>

	<footer>
		<p>&copy; 2024 Cowboy Roots - Todos os direitos reservados</p>
	</footer>
</body>

</html>
