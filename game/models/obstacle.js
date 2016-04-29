// Declaration of player data.
function Obstacle(game){
	this.game = game;
	this.spriteObstacle = null;
	this.colliderSprite = null;
}

// Info of the player's position.
//var positionData = {
//	initial: { x: 100, y: 250 }, // initial position of the player
//	colliderDifference: {x: 4, y: 3}, // distance from collider sprite to sprite
//};

// Initializes the players sprites.
Obstacle.prototype.render = function(){
	// loads sprites
	this.spriteObstacle = this.game.add.sprite(10, 155, 'block');
	
	// sets sprite properties
	//	this.colliderSprite.alpha = 0; // invisible collider sprite
	//this.game.physics.arcade.enable(this.colliderSprite); // enables physics on colliderSprite
	this.game.physics.arcade.enable(this.spriteObstacle, Phaser.Physics.ARCADE); // enables physics on sprite
	this.spriteObstacle.body.collideWorldBounds.up = true;
	this.spriteObstacle.body.checkCollision.up = true;
	this.spriteObstacle.body.checkCollision.down = true;
	this.spriteObstacle.body.immovable = true;

	//this.colliderSprite.immovable = true; // makes it immovable when a collision occurs
	//this.colliderSprite.body.collideWorldBounds = true; // colliderSprite cannot exceed the world bounds

};

// Loads the player's sprites and defines it's animations.
Obstacle.prototype.load = function(){
	this.render();
}

// Updates the player.
Obstacle.prototype.update = function(){
	this.handleMovement();
	//this.game.physics.arcade.collide(this.spriteObstacle, this.game.player.colliderSprite;
}
