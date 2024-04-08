class User < ApplicationRecord
    enum role: { customer: 0, employee: 1, admin: 2  }
    enum status: { pending: 0, active: 1, suspended: 2 }

    has_secure_password

    has_many :tokens,  dependent: :destroy

    validates :username, uniqueness: true
    before_save { self.email = email.downcase }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
    validates :password, length: { minimum: 6 }

end
