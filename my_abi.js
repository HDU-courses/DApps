let myABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_boardId",
				"type": "uint256"
			},
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_content",
				"type": "string"
			}
		],
		"name": "createArticle",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "createBoard",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_boardId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_name",
				"type": "string"
			}
		],
		"name": "NewBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_articleId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "_boardId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_title",
				"type": "string"
			}
		],
		"name": "NewArticle",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "articles",
		"outputs": [
			{
				"name": "boardId",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "content",
				"type": "string"
			},
			{
				"name": "hot",
				"type": "uint32"
			},
			{
				"name": "count",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "boards",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "desc",
				"type": "string"
			},
			{
				"name": "hot",
				"type": "uint32"
			},
			{
				"name": "count",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getArticle",
		"outputs": [
			{
				"name": "_articleId",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "content",
				"type": "string"
			},
			{
				"name": "hot",
				"type": "uint32"
			},
			{
				"name": "count",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];