// hevm: flattened sources of src/tub.sol
pragma solidity ^0.4.18;

// bbs Board

contract Bbs{

   uint boardFee = 0.001 ether;
   uint ArticleFee = 0.001 ether;
   event NewBoard( uint _boardId, address indexed _owner, string _name);
   event NewArticle( uint _articleId, uint indexed _boardId, address indexed _owner, string _title);
   
   Board[] public boards;
   Article[] public articles;
   

    // createBoard
    function createBoard(string _name, string _desc) external  payable {
       require(msg.value == boardFee);
       uint id = boards.push( Board(msg.sender, _name, _desc,0,0)) - 1;
       emit NewBoard(id,  msg.sender, _name);
    }
    
    function createArticle(uint _boardId, string _title, string _content) external payable {
       require(msg.value == ArticleFee );
        uint id = articles.push(Article(_boardId, msg.sender, _title, _content , 0 , 0)) - 1;
        emit NewArticle( _boardId, id, msg.sender, _title );
    }
    
    function getArticle(uint _id) public view returns (uint _articleId, address _owner, string title, string content, uint32 hot, uint32 count) {
        require(_id < articles.length);
        
        return (_id, articles[_id].owner, articles[_id].title, articles[_id].content, articles[_id].hot, articles[_id].count );
    }
    
    struct Board{
        address owner;
        string  name;
        string  desc;
        uint32   hot;
        uint32   count;
    }
    
    struct Article {
       uint boardId;
       address owner;
       string title;
       string content;
       uint32   hot;
       uint32   count;
    }

}
