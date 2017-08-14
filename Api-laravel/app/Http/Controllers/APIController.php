<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Lib\ApiProducer;
use Illuminate\Support\Facades\Input as Input;
class APIController extends Controller
{
    
    
    
    
  
    
    /**
     * 
     * @return JSON Array
     */
    public function getAllArticles(){
        
    $info=ApiProducer::getArticles (0,false);    
    return response()->json($info['data'], $info['status']);
    }
    
    /**
     * 
     * @return JSON Array
     */
    public function getOneArticle(Request $request,$offset){
        $info=ApiProducer::getArticles ($offset,1);  
       // return response()->json($info);   
        return response()->json($info['data'], $info['status']);
      
    }
    
    
    public function storeArticle(Request $request)
    {
        
    
        $info = ApiProducer::createArticle($request->all());

        return response()->json( ['data'=>$info['data']], $info['status']);
    }
    
    
     public function storeAuthor(Request $request)
    {
        
    
        $info = ApiProducer::createAuthor($request->all());

        return response()->json($info['data'], $info['status']);
    }
    
     public function deleteArticle(Request $request,$id)
    {//return response()->json("test");  
         $info =ApiProducer::deleteArticle($request->all(),$id);

        return response()->json(['data'=>$info['data']], $info['status']);
    }
    
    
    public function updateArticle(Request $request,$id)
    {
        
    
        $info = ApiProducer::updateArticle($request->all(),$id);

        return response()->json( ['data'=>$info['data']], $info['status']);
    }
    
	
}
