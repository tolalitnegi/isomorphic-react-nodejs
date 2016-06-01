/** @jsx React.DOM */

var React = require('react/addons');


var Product  = React.createClass({
          render: function(){

          console.log('JSON : '+ JSON.stringify(this.props.item));
             return (
                       <li className="product_panel_medium product_panel_data" data-productid={this.props.item.id} data-mfr={this.props.item.brand} data-mfritemnum="" id="US_40T6WEMP1S">
                          <div className="productPanelMain">

                              <div className="product_panel">

                                  <a oncontextmenu="javascript:mkobj.setCurrentURLInCookie(this);" onclick="javascript:mkobj.setCurrentURLInCookie(this);searchResultTab();" href={this.props.item.detailPage} title={this.props.item.name} data-alt-src="http://michaelkors.scene7.com/is/image/MichaelKors/40T6WEMP1S-1220_2?$categoryMediumNew$" rel="http://michaelkors.scene7.com/is/image/MichaelKors/40T6WEMP1S-1220_IS?$categoryMediumNew$">
                                      <img src={this.props.item.image} alt={this.props.item.name}></img>
                                      <div className="prod_name prod_name_width">
                                          <span>{this.props.item.brand}</span>
                                          <h6>{this.props.item.name}</h6>
                                      </div>
                                  </a>

                              </div>

                              <div className="product_description">
                                  {this.props.item.price}
                                  <div className="item-meta">
                                      <a title="More-colors" oncontextmenu="javascript:mkobj.setCurrentURLInCookie(this);" onclick="javascript:mkobj.setCurrentURLInCookie(this);" href={this.props.item.detailPage}>More colors</a>
                                  </div>
                              </div>
                          </div>
                      </li>
               );
          }
  });

var ProductListView = React.createClass({

      componentDidMount: function () {
          //console.log('props json string'+ JSON.stringify(that.props));

      },
      render: function () {
          that = this;
          //console.log('props : '+ that.props);

          //console.log('props json string : '+ JSON.stringify(that.props));

          var productsList = that.props.products.map(function(item){
                  return ( <Product item={item} > </Product>)
          });

          return  (
                  <div className="products_content">

                      <ul className="products-list producMediumNormaList">
                            {productsList } 
                          </ul>

                    </div>
            )
      }
  });

// Module.exports instead of normal dom mounting
module.exports = ProductListView;