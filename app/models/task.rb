class Task < ApplicationRecord

    validate :start_end_check

    def start_end_check
        errors.add(:end_date, "終了日は開始日より前の日付で登録できません") unless
          self.start_date < self.end_date
    end

    validate :date_before_start

    def date_before_start
      errors.add(:start_date, "は今日以降のものを選択してください") if
      start_date < Date.today
    end

    validates :title, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true

end
