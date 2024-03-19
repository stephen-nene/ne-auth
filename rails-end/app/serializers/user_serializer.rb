class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :number, :role, :status, :profile_pic, :first_name, :last_name

  # def orders
  #   if @instance_options[:action] == :show && object.customer?
  #     object.orders_as_customer
  #   end
  # end


end
