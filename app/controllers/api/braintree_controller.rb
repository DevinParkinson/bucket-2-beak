class Api::BraintreeController < ApplicationController
  def token
    render json: ENV['BRAINTREE_DROPIN_TOKEN']
  end

  def payment
    # result = Braintree::Transaction.sale(
    #   :amount => params[:amount],
    #   :payment_method_nonce => params[:nonce],
    #   :options => {
    #     :submit_for_settlement => true
    #   }
    # )
    result = gateway.customer.create(
      :payment_method_nonce => params[:nonce]
    )

    if result.success?
      result = gateway.subscription.create(
        :payment_method_token => result.customer.payment_methods[0].token,
        :plan_id => "8d6b"
      )
    else
      p result.errors
    end
  end

end
