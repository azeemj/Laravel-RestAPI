<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Lib\ApiProducer;
use Illuminate\Support\Facades\Input as Input;
class APIController extends Controller
{
    
    
    
    
   /**
    * API calls this function
    * @param Request $request
    * @return type JSON Array
    */
    static function weeklyGraph(Request $request) {
    $token = $request->header('Token');  
    $auth=ApiProducer::requestToken ($token);
    if($auth==false){
     return response()->json(['success' => false, 'content' => ['message' => "Invalid token.",
        'result' => null]]);    
    }else{
    $result = ApiProducer::getWeeklygraphData();
    if (count($result) > 0) {
    print json_encode($result, JSON_NUMERIC_CHECK);
    } else {
    return response()->json(['success' => false, 'content' => ['message' => "Invalid data.",
        'result' => null]]); 
    }
    }
    }
    
    /**
     * 
     * @return JSON Array
     */
    public function getAllArticles(){
        
    $info=ApiProducer::getArticles (false);    
    return response()->json($info['data'], $info['status']);
    }
    
    /**
     * 
     * @return JSON Array
     */
    public function getOneArticle(){
        $info=ApiProducer::getArticles (1);  
       // return response()->json($info);   
        return response()->json($info['data'], $info['status']);
      
    }
    
    
    public function store(Request $request)
    {
        
    
        $info = ApiProducer::create($request->all());

        return response()->json($info['data'], $info['status']);
    }
    
	
}
