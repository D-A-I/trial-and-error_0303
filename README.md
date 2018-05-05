# trial-and-error_0303

typescript／karma／ES Module（webpack） 辺りを試行錯誤する  
karmaでのBDDを中心に開発を進めることを想定し、HMRの設定はしてない  
- typescript
- bootstrap
- webpack
- karma(mocha, chai)
- yarn
- vue
- jquery  

＊ jqueryからumbrella.js等に変えようかとか思ってたが、型定義ファイルが公開されておらず、自作はダルいので止める  
＊ 軽量化のため、jqueryをjquery.slim（$.ajax除外版）に変更  
＊ karma廻りは、右記を含めて検討途中.. karma-sourcemap-loader, karma-chrome-launcher